/**
 * Created by Administrator on 2015/8/25.
 */

var CommentBox = React.createClass({
    render: function () {
        return (
            <div className='commentBox'>
                <h1>Comments</h1>
                Hello world ! I am a CommentBox.
            </div>
        );
    }
});





React.render(
    <CommentBox />,
    document.getElementById('content')
);