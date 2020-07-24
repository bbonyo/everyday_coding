import React, {Component} from 'react';


class CreateContent extends Component{
    render() {
        console.log('Content render');
        return(
            <div>
                <article>
                    <h1>Create</h1>
                    <form action = "/create_process" method = "post"
                      onSubmit = {function(e) {
                        e.preventDefault();
                        // debugger;
                        this.props.onSubmit(
                            e.target.title.value, 
                            e.target.desc.value);
                        // alert('Submit!!!'); 
                      }.bind(this)}   
                    >
                        {/* post방식으로 가야 url이 노출이 안된단다. */}
                        <p><input type = "text" name = "title" placeholder = "제목"></input></p>
                        <p><textarea name = "desc" placeholder = "내용"></textarea></p>
                        <p><input type = "submit" value = "보내기"></input></p>
                    </form>
                </article>
            </div>
        );
    }
}


export default CreateContent;