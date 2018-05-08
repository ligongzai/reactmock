import React,{Component} from 'react';
import '../commoncss/header.less';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';

class Header extends Component {
    render() {
        return (
            <div className="component-header">
                <Row align={"middle"} justify={"space-between"}>
                    <Col offset={5} span={3}>
                        <img src="/static/images/logo.png" width="30" className="-col-auto"/>
                    </Col>
                    <Col span={12}>
                        <h1 className="caption">React Music player</h1>
                    </Col>
                </Row>
            </div>
        );
    }
}
export default Header;