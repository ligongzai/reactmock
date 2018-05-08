import React, { Component } from 'react'
import { render } from 'react-dom'
import Root from './components/root'

// tutorial1.js
class CommentBox extends Component {
    render() {
        return (
            <div className="commentBox">
                Hello, world! I am a CommentBox.
            </div>
        )
    }
}

render(
    <Root/>,
    document.getElementById('content')
)