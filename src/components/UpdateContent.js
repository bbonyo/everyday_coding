import React, {Component} from 'react';


class UpdateContent extends Component{
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.data.title,
            desc : this.props.data.desc
        }
        this.inputFormHandler = this.inputFormHandler.bind(this);
    }

    inputFormHandler(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    render() { 
        console.log(this.props.data);
        console.log('UpdateContent render');
        return(
            <div>
                <article>
                    <h1>Update React!!</h1>
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
                        <p><input 
                        type = "text" 
                        name = "title"
                        placeholder = "제목"
                        value = {this.state.title}
                        onChange = {this.inputFormHandler}
                        ></input>
                        </p>
                        
                        <p>
                        <textarea 
                        onChange = {this.inputFormHandler}
                        name = "desc" 
                        placeholder = "내용"
                        value = {this.state.desc}
                        ></textarea>
                        </p>
                        <p><input type = "submit" value = "보내기"></input></p>
                    </form>
                </article>
            </div>
        );
    }
}


export default UpdateContent;