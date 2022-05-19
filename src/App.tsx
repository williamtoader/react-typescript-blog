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
                    <article className="prose lg:prose-md">
                        <h1>Garlic bread with cheese: What the science tells us</h1>
                        <p className="font-serif">
                            For years parents have espoused the health benefits of eating garlic bread with cheese to their
                            children, with the food earning such an iconic status in our culture that kids will often dress
                            up as warm, cheesy loaf for Halloween.
                        </p>
                        <p className="font-ui">
                            But a recent study shows that the celebrated appetizer may be linked to a series of rabies cases
                            springing up around the country.
                        </p>
                        <div className={"m-20 ml-0 block"}>
                            <div>
                                Option {String(this.state.val)} is selected.
                            </div>
                        </div>
                        <CustomSelect onChange={val => this.setState({val})} options={
                            [
                                {text: "all", key: ""},
                                {text: "opt 1", key: "1"},
                                {text: "opt 2", key: "2"},
                                {text: "opt 3", key: "3"},
                                {text: "opt 4", key: "4"}
                            ]
                        }/>
                        <div className={"m-20 ml-0 block"}>
                            <div>
                                Option {String(this.state.val)} is selected.
                            </div>
                        </div>
                        <CustomToolbarButton text="Add article" icon="fa fa-solid fa-plus" onClick={()=>{}}/>

                    </article>

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