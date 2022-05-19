import React, {Component} from 'react';
import ArticleHeading from "../ui/ArticleHeading";
import RandomHeroImage from "../ui/RandomHeroImage";
import ArticleText from "../ui/ArticleText";
import {PostsApiService} from "../../service/PostsApiService";
import {IPost} from "../../types/IPost";
import {useDeps} from "../../service/DependencyInjector";
import {UsersApiService} from "../../service/UsersApiService";
import {CommentsApiService} from "../../service/CommentsApiService";
import Comments from "./Comments";

const ArticleMapper = props => {
    const articleData: IPost = props.articleData;
    return (
        <article>
            <ArticleHeading
                title={articleData.title}
                subtitle={`Post no. ${articleData.id}`}
                author={articleData.user.name}
                date="Mon 16 May 2022"
                btnEdit={()=>{alert("edit")}}
                btnDelete={()=>{alert("delete")}}
            />
            <RandomHeroImage/>
            <ArticleText innerHtml={
                articleData.body
            }/>
            <Comments comments={articleData.comments}/>
        </article>
    );
}

class ContentSectionComponent extends Component<
    {
        userFilter: string,
        postsAPI: typeof PostsApiService,
        usersAPI: typeof UsersApiService,
        commentsAPI: typeof CommentsApiService
    },
    {articles: IPost[], page: number}
    > {
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            page: 1
        }
        this.postsPromise = this.loadPosts();
        this.loadPosts = this.loadPosts.bind(this);
    }

    private postsPromise;

    render() {
        let pageControls:React.ReactElement<any>;
        if(this.props.userFilter === "") pageControls = (<React.Fragment>
            <button onClick={()=>{this.setState({page: this.state.page + 1})}}>Next</button>
            <button onClick={()=>{this.setState({page: this.state.page - 1})}}>Prev</button>
        </React.Fragment>);
        else pageControls = <React.Fragment/>;
        return (
            <div>
                {pageControls}

                {this.state.articles.map(article => (
                    <ArticleMapper articleData={article}/>
                ))}
            </div>
        );
    }

    private loadPosts: () => Promise<IPost[]> = () => {
        if(this.props.userFilter === "") return this.props.postsAPI.getPaginated(this.state.page, 3)
            .then(async (posts: IPost[]) => {
                return await Promise.all(posts.map(async post => {
                    post.user = await this.props.usersAPI.getById(post.userId);
                    post.comments = await this.props.commentsAPI.getByPost(String(post.id));
                    return post;
                }));
            });
        else return this.props.postsAPI.getByUserId(this.props.userFilter)
            .then(async (posts: IPost[]) => {
                return await Promise.all(posts.map(async post => {
                    post.user = await this.props.usersAPI.getById(post.userId);
                    post.comments = await this.props.commentsAPI.getByPost(String(post.id));
                    return post;
                }));
            });
    }

    componentDidUpdate(
        prevProps: Readonly<{
            userFilter: string,
            postsAPI: typeof PostsApiService,
            usersAPI: typeof UsersApiService,
            commentsAPI: typeof CommentsApiService
        }>,
        prevState: Readonly<{ articles: IPost[]; page: number }>,
        snapshot?: any
    ) {
        if(prevState.page !== this.state.page) {
            this.postsPromise = this.loadPosts();
            this.postsPromise.then(
                articles => this.setState({articles})
            ).catch(
                () => {
                    this.setState({articles: []})
                }
            )
        }
        if(prevProps.userFilter !== this.props.userFilter) {
            this.postsPromise = this.loadPosts();
            this.postsPromise.then(
                articles => this.setState({articles})
            ).catch(
                () => {
                    this.setState({page: prevState.page});
                }
            )
        }

    }

    componentDidMount() {
        this.postsPromise.then(
            articles => this.setState({articles})
        )
    }
}

const ContentSection = (props) => {
    const postsAPI = useDeps().postsAPI as typeof PostsApiService;
    const usersAPI = useDeps().usersAPI as typeof UsersApiService;
    const commentsAPI = useDeps().commentsAPI as typeof CommentsApiService;
    return <ContentSectionComponent postsAPI={postsAPI} usersAPI={usersAPI} commentsAPI={commentsAPI} userFilter={props.userFilter}/>
}

export default ContentSection;