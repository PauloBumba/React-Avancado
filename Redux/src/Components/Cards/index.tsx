import React from 'react';

// Lista de produtos variados com imagens reais
const produtos = [
    {
        nome: 'Camiseta Básica',
        preco: 'R$ 40,00',
        descricao: 'Camiseta de algodão 100% confortável.',
        imagem: 'https://images.pexels.com/photos/428340/pexels-photo-428340.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        categoria: 'Roupas',
    },
    {
        nome: 'Tênis Esportivo',
        preco: 'R$ 150,00',
        descricao: 'Tênis leve e ideal para corridas.',
        imagem: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        categoria: 'Calçados',
    },
    {
        nome: 'Fone de Ouvido Bluetooth',
        preco: 'R$ 250,00',
        descricao: 'Fone sem fio com alta qualidade de som.',
        imagem: 'https://images.pexels.com/photos/373876/pexels-photo-373876.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        categoria: 'Eletrônicos',
    },
    {
        nome: 'Relógio Digital',
        preco: 'R$ 99,00',
        descricao: 'Relógio resistente à água e com design moderno.',
        imagem: 'https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        categoria: 'Acessórios',
    },
    {
        nome: 'Mochila para Notebook',
        preco: 'R$ 120,00',
        descricao: 'Mochila acolchoada para notebooks até 15.6".',
        imagem: 'https://images.pexels.com/photos/1743663/pexels-photo-1743663.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        categoria: 'Acessórios',
    },
    {
        nome: 'Livro: "A Arte da Guerra"',
        preco: 'R$ 30,00',
        descricao: 'Clássico livro de estratégia e liderança.',
        imagem: 'https://images.pexels.com/photos/33283/stack-of-books-vintage-books-book-books.jpg?auto=compress&cs=tinysrgb&h=650&w=940',
        categoria: 'Livros',
    },
];

export const Card: React.FC = () => {
    return (
        <div className="container-fluid">
            <div className="row row-cols-1 g-3 mx-md-5 row-cols-md-3 my-2">
                {produtos.map((produto, index) => (
                    <div className="col" key={index}>
                        <div className="card h-100 shadow-lg rounded">
                            <img src={produto.imagem} className="object-fit-cover rounded  img-thumbnail p-2" alt={produto.nome} style={{height:200}}/>
                            <div className="card-body text-center">
                                <h5 className="card-title">{produto.nome}</h5>
                                <p className="card-text">{produto.descricao}</p>
                                <p className="card-text fw-bold">{produto.preco}</p>
                                <p className="card-text text-muted">{produto.categoria}</p>
                                <button className='  w-100 btn btn-primary rounded '> Adicionar Carrinho</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
