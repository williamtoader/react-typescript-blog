import React, {Component} from 'react';
import CustomSelect from "./components/ui/CustomSelect";
import './App.css';
import CustomToolbarButton from "./components/ui/CustomToolbarButton";


import {PostsApiService} from "./service/PostsApiService";
import {DepsProvider} from "./service/DependencyInjector";
import {UsersApiService} from "./service/UsersApiService";
import ContentSection from "./components/structure/ContentSection";
import {CommentsApiService} from "./service/CommentsApiService";
import AddArticleForm from "./components/ui/AddArticleForm";
import {AuthorPicker} from "./components/structure/AuthorPicker";

class App extends Component<{}, {val: string, articleModalVisible: boolean}> {
    constructor(props) {
        super(props);
        this.state = {
            val: "",
            articleModalVisible: false
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
                            <CustomToolbarButton text="Add article" icon="fa fa-solid fa-plus" onClick={()=>{
                                this.setState({articleModalVisible: !this.state.articleModalVisible})
                            }}/>
                        </div>
                    </div>
                    <br/>
                    <AddArticleForm visible={this.state.articleModalVisible}/>
                    <br/>

                    <ContentSection userFilter={this.state.val}/>
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