var movies = [{
        id: 1,
        img: 'https://vignette.wikia.nocookie.net/harrypotter/images/b/bd/7xmtxRc9nQnCuWINuTT4SMP5NJc.jpg/revision/latest/scale-to-width-down/333?cb=20130803164345',
        title: 'Harry Potter',
        desc: 'film o czarodzieju'
    },
    {
        id: 2,
        img: 'http://moviesroom.pl/images/0.Aktualizacja_listopad/Dude%C5%82e/kr%C3%B3l_lew.jpg',
        title: 'Król Lew',
        desc: 'Film o królu sawanny'
    },
    {
        id: 3,
        img: 'http://1.fwcdn.pl/ph/82/58/528258/201808.2.jpg',
        title: 'The Social Network',
        desc: 'Amerykański film obyczajowy z 2010 roku o powstaniu serwisu społecznościowego Facebook w reżyserii Davida Finchera. Film powstał na podstawie książki Bena Mezricha Miliarderzy z przypadku.'
    }
];


var Movie = React.createClass({
    propTypes: {
        movie: React.PropTypes.object.isRequired,
    },

    render: function() {
        return (
            React.createElement('li', {},
                React.createElement(MovieTitle, { title: this.props.movie.title }),
                React.createElement(MovieImg, { img: this.props.movie.img }),
                React.createElement(MovieDesc, { desc: this.props.movie.desc })
            )
        );
    }
});

var MovieTitle = React.createClass({
    propTypes: {
        title: React.PropTypes.string.isRequired,
    },
    render: function() {
        return React.createElement('h2', {}, this.props.title);
    }
});

var MovieImg = React.createClass({
    propTypes: {
        img: React.PropTypes.string.isRequired,
    },
    render: function() {
        return React.createElement('img', { src: this.props.img });
    }
});

var MovieDesc = React.createClass({
    propTypes: {
        desc: React.PropTypes.string.isRequired,
    },
    render: function() {
        return React.createElement('p', {}, this.props.desc);
    }
});

var MovieList = React.createClass({
    propTypes: {
        moviesElements: React.PropTypes.array.isRequired,
    },
        
    render: function() {
        var items = this.props.moviesElements.map(function(movie) {
                        return (React.createElement(Movie, { key: movie.id, movie: movie }));
                    });
        return React.createElement('ul', {}, items);
    }
});

var element = React.createElement(MovieList, {moviesElements: movies});

ReactDOM.render(element, document.getElementById('app'));
