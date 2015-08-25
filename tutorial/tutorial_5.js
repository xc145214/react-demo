/**
 * Created by Administrator on 2015/8/25.
 */
var data = [
    {author:'Pete Hunt',text:'This one comment'},
    {author: "Jordan Walke", text: "This is *another* comment"}
];

var CommentBox = React.createClass({
    render: function () {
        return (
            <div className='commentBox'>
                <h1>Comments</h1>
                Hello world ! I am a CommentBox.
                <CommentList data={this.props.data}/>
                <CommentForm />
            </div>
        );
    }
});


var CommentList = React.createClass({
    render: function () {
        var commentNodes = this.props.data.map(function(comment){
            return(
                <Comment author={comment.author}>
                    {comment.text}
                </Comment>
            )
        });
        return (
            <div className='commentList'>
                {commentNodes}
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
    <CommentBox data={data}/>,
    document.getElementById('content')
);