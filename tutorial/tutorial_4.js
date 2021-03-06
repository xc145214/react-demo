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
                <Comment author="Pete Hunt">This is one comment</Comment>
                <Comment author="Jordan Walke">This is *another* comment</Comment>
            </div>
        );
    }
});

var Comment = React.createClass({
    render: function () {
        var rawMarkup = marked(this.props.children.toString(),{sanitize:true});
        return (
            <div className='comment'>
                <h2 className="commentAuthor">
                    {this.props.author}
                </h2>
                <span dangerouslySetInnerHtml={{__html: rawMarkup}}></span>
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