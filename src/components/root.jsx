import React,{Component} from 'react';
import Header from './header';
import Progress from './progress';

class Root extends Component{
    render(){
        return (
            <div>
                <Header/>
                <Progress progress='2'/>
            </div>
        );
    }
}
export default Root;