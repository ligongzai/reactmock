import React,{Component} from 'react';
import '../commoncss/progress.less';
import Row from 'antd/lib/row';

class  Progress extends Component{
    render() {
        return (
            <Row className="component-progress">
                {this.props.progress}s
            </Row>
        );
    }
}
export default Progress;