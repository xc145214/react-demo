/**
 * Created by Administrator on 2015/8/25.
 */

var CommentBox = React.createClass({
    render: function () {
        return (
            <div className='commentBox'>
                <h1>Comments</h1>
                Hello world ! I am a CommentBox.
                <CommentList />
                <CommentForm />
            </div>
        );
    }
});


var CommentList = React.createClass({
    render: function () {
        return (
            <div className='commentList'>
                Hello, world! I am a CommentList.
            </div>
        );
    }
});

var CommentForm = React.createClass({
    render: function () {
        return (
            <div className="commentForm">
                Hello, world! I am a CommentForm.
            </div>
        );
    }
});


React.render(
    <CommentBox />,
    document.getElementById('content')
);