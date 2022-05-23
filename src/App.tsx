import React, {Component} from 'react';
import CustomSelect from "./components/ui/CustomSelect";
import './App.css';
import CustomToolbarButton from "./components/ui/CustomToolbarButton";


import {PostsApiService} from "./service/PostsApiService";
import {DepsProvider} from "./service/DependencyInjector";
import {UsersApiService} from "./service/UsersApiService";
import ContentSection from "./components/structure/ContentSection";
import {IComment} from "./types/IComment";
import Comments from "./components/structure/Comments";
import {CommentsApiService} from "./service/CommentsApiService";
import AddArticleForm from "./components/ui/AddArticleForm";
import {AuthorPicker} from "./components/structure/AuthorPicker";

class App extends Component<{}, {val: string}> {
    constructor(props) {
        super(props);
        this.state = {
            val: ""
        }
    }


    render() {
        return (
            <DepsProvider
                postsAPI={PostsApiService}
                usersAPI={UsersApiService}
                commentsAPI={CommentsApiService}
            >
                <div className={"p-8"}>
                    <div className="w-full h-[50px]">
                        <div className="float-left">
                            <AuthorPicker onChange={val => this.setState({val})} />
                        </div>
                        <div className="float-right">
                            <CustomToolbarButton text="Add article" icon="fa fa-solid fa-plus" onClick={()=>{}}/>
                        </div>
                    </div>

                    <br/>

                    <ContentSection userFilter={this.state.val}/>



                    <AddArticleForm/>
                </div>
            </DepsProvider>

        );
    }
    componentDidUpdate() {

    }
    componentDidMount() {
    }
}

export default App;