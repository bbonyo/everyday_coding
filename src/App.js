import React , {Component} from 'react';
import './App.css';
import Subject from './components/Subject';
import TOC from './components/TOC';
import ReadContent from './components/ReadContent';

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
      welcome : {title: 'Welcome!!' ,desc : 'Hello React!!'},
      selected_content_id : 1,
      black: {title: 'Black Pink', desc: 'In your area!!'},
      subject: {title: 'Number1 K-Pop Girl Group' ,sub:'Who is the best??'},
      contents : [
        {id:1 , title: 'Jisoo', desc: 'Cuty!!'},
        {id:2, title: 'Rose' , desc: 'Sexy!!'},
        {id:3 , title: 'Jenny' , desc: 'Pretty!!'},
        {id:4 , title: 'Risa', desc: 'Angg!!'}
      ]
    }
  }

  render() {
    console.log('App render');
    var _title, _desc, _article = null;
    if(this.state.mode === 'black') {
      _title = this.state.black.title;
      _desc = this.state.black.desc;
    }else if(this.state.mode === 'pink') {
      var i = 0;
      while(i < this.state.contents.length) {
        var data = this.state.contents[i];
        if(data.id === this.state.selected_content_id) {
          _title = data.title;
          _desc = data.desc;
          break;
        }
        i = i + 1;
      }
      _article = <ReadContent title = {_title} desc = {_desc}/>
      
    }else if(this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title = {_title} desc = {_desc}/>

    } else if(this.state.mode === 'create') {
      _article = <CreateContent onSubmit = {function(_title, _desc) {
          // add content to this.state.contents
          this.max_content_id = this.max_content_id + 1;
          var _contents = this.state.contents.concat({
            id: this.max_content_id, title: _title, desc: _desc
          })
          this.setState({
            contents: _contents
          })
          console.log(_title, _desc);
      }.bind(this)}/>;
    }

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
          
        {_article}
    
      </div>
    );
  }
  
}

export default App;
