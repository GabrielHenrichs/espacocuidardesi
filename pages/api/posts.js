export default (req, res) => {
    res.json({
        posts: [
            { title: 'Título 1', content: 'lksfj askldfj alskdjf a'},
            { title: 'Título 2', content: 'lksfj askldfj alskdjf a'},
            { title: 'Título 3', content: 'Conteúdo askldfj alskdjf a'},
        ]
    });
  };
  