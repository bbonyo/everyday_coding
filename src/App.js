import React , {Component} from 'react';
import './App.css';
import Subject from './components/Subject';
import TOC from './components/TOC';
import ReadContent from './components/ReadContent';
import UpdateContent from './components/UpdateContent';
import CreateContent from './components/CreateContent';
import Control from './components/Control';
// .js 파일은 경로 입력시 .js를 생략해도 된다
// import eagle from './photo/독수리.jpg';

class App extends Component {
  constructor(props) {
    super(props);
    this.max_content_id = 4;
    this.state = {
      mode : 'create',
      welcome : {title: '밤에도 낮에도!!' ,desc : '싼다!!'},
      selected_content_id : 1,
      black: {title: 'Black Pink', desc: 'In your area!!'},
      subject: {title: '조적 크루' ,sub:'since 2019.12'},
      contents : [
        {id:1 , title: 'Mr.Choi', desc: 'Big brother'},
        {id:2, title: 'Ms.Jeong' , desc: 'Syster'},
        {id:3 , title: 'Mr.Oh' , desc: 'Friend'},
        {id:4 , title: 'Mr.Shin', desc: 'Genius!!'}
      ]
    }
  }

  getReadContent() {
    var i = 0;
      while(i < this.state.contents.length) {
        var data = this.state.contents[i];
        if(data.id === this.state.selected_content_id) {
          return data;
          break;
        }
        i = i + 1;
      }
  }

  getContent() {
    
    var _title, _desc, _article = null;
    if(this.state.mode === 'black') {
      _title = this.state.black.title;
      _desc = this.state.black.desc;
    }else if(this.state.mode === 'pink') {
      var _content = this.getReadContent();
      _article = <ReadContent title = {_content.title} desc = {_content.desc}/>
      
    }else if(this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title = {_title} desc = {_desc}/>

    } else if(this.state.mode === 'update') {
      _content = this.getReadContent();
      _article = <UpdateContent data = {_content} onSubmit = {function(_title, _desc) {
          // add content to this.state.contents
          this.max_content_id = this.max_content_id + 1;
          // this.state.contents.push({ id: this.max_content_id, title: _title, desc: _desc});
          // push()함수는 원본  element값 자체를 바꾼다.
          var _contents = this.state.contents.concat({
            id: this.max_content_id, title: _title, desc: _desc
          })  
          this.setState({
            contents: _contents
          })
          console.log(_title, _desc);
      }.bind(this)}/>;
    }else if(this.state.mode === 'create') {
      _article = <CreateContent onSubmit = {function(_title, _desc){
        this.max_content_id = this.max_content_id + 1;
        var _contents = this.state.contents.concat({
          id: this.max_content_id, title: _title, desc: _desc
        });
        this.setState({
          contents: _contents
        });
        console.log(_title, _desc);
      }.bind(this)}/>
    }
    return _article;
  }

  render() {
    console.log('App render');

    return (
      <div>
        <Subject 
        title = {this.state.subject.title} 
        desc = {this.state.subject.sub}
        onChangePage = {function() {
          
          this.setState({mode : 'welcome'});
        }.bind(this)}
        />
        
        <TOC 
          data={this.state.contents}
          onChangePage = {function(id) {
     
            this.setState({
              mode : 'pink',
              selected_content_id : Number(id)
            });
          }.bind(this)}
        />

        <Control onChangeMode = {function(_mode){
          this.setState({
            mode: _mode
          });
        }.bind(this)}/>
          
        {/* {_article} */}
        {this.getContent()}
    
      </div>
    );
  }
  
}

export default App;
