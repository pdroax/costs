// import styles from './Products.module.css'
// import fume from '../../img/fume.jpg'

// function Products () {

//     return (
//         <section className={styles.products_container}>
//             <div>
//                 <ul className={styles.products}>
//                     <li className={styles.product}>
//                         <div>
//                             <img src={fume} alt='fume'></img>
//                             <h2>Professional Fumê</h2>
//                             <p></p>
//                             <h3>Graduações:</h3>
//                             <ul>
//                                 <li>5%</li>
//                                 <li>20%</li>
//                                 <li>35%</li>
//                                 <li>50%</li>
//                             </ul>
//                         </div>
//                     </li>
//                     <li>
//                     <div>
//                             <img src={fume} alt='fume'></img>
//                             <h2>Metalizada</h2>
//                             <p>Película semi-brilho profissional. Muito eficiente contra o calor proveniente dos raios solares, sem ser totalmente espelhada</p>
//                             <h3>Graduações:</h3>
//                             <ul>
//                                 <li>5%</li>
//                                 <li>20%</li>
//                                 <li>35%</li>
//                             </ul>
//                         </div>
//                     </li>
//                     <li>
//                         <div>
//                             <img src={fume} alt='fume'></img>
//                             <h2>Segurança</h2>
//                             <p>Películas mais espessas e resistentes, dão mais resistência ao vidro e impedem que ele se despedace na eventualidade da quebra</p>
//                             <h3>Graduações:</h3>
//                             <ul>
//                                 <li>5%</li>
//                                 <li>20%</li>
//                                 <li>35%</li>
//                                 <li>Transparente(Sem bloqueio de UV e IR)</li>
//                             </ul>
//                         </div>
//                     </li>
//                     <li>
//                     <div>
//                             <img src={fume} alt='fume'></img>
//                             <h2>Película Jateada</h2>
//                             <p>Película branca translúcida, impede a visão sem tirar a luminosidade do ambiente </p>
//                             <h3>Graduações:</h3>
//                     </div>
//                     </li>
//                     <li>
//                         <div>
//                             <img src={fume} alt='fume'></img>
//                             <h2>Vinil Jateado</h2>
//                             <p>Um pouco mais transparente que a Película Jateada, o Vinil Jateado é indicado quando se necessita privacidade sem fechar muito o ambiente</p>
//                         </div>
//                     </li>
//                     <li>
//                         <div>
//                             <img src={fume} alt='fume'></img>
//                             <h2>Prata Espelhada</h2>
//                             <p>Película prata em ambos os lados, tem a maior eficiência no bloqueio do calor do sol entre as películas, pois ao mesmo tempo filtra e reflete os raios UV e IR. Disponível na graduação 5%</p>
//                         </div>
//                     </li>
//                     <li>
//                         <div>
//                             <img src={fume} alt='fume'></img>
//                             <h2>Silver Black</h2>
//                             <p> Película extra-escura (graduação 3%), prata no lado externo e fumê no lado interno. Grande capacidade de bloqueio de calor do sol</p>
//                         </div>
//                     </li>
//                     <li>
//                         <div>
//                             <img src={fume} alt='fume'></img>
//                             <h2>Espelhada (Colorida)</h2>
//                             <p>Películas espelhadas em cores diversas, com função decorativa</p>
//                             <h3>Cores:</h3>
//                             <ul>
//                                 <li>Vermelho Espelhado</li>
//                                 <li>Verde Espelhado</li>
//                                 <li>Azul Espelhado</li>
//                                 <li>Dourada</li>
//                                 <li>Bronze</li>
//                             </ul>
//                         </div>
//                     </li>
//                     <li>
//                         <div>
//                             <img src={fume} alt='fume'></img>
//                             <h2>Museu 56D</h2>
//                             <p>Pelicula metalizada clara (56%)</p>
//                         </div>
//                     </li>
//                     <li>
//                         <div>
//                             <img src={fume} alt='fume'></img>
//                             <h2>LG-80</h2>
//                             <p>Película clara (80%) com grande índice de bloqueio de UV (99%). Indicada para vitrines, para evitar o desbotamento causado pela incidência de raios solares. Pouco bloqueio de IR (calor). </p>
//                         </div>
//                     </li>
//                     <li>
//                         <div>
//                             <img src={fume} alt='fume'></img>
//                             <h2>Opacas</h2>
//                             <p>Películas opacas, utilizadas quando se deseja impedir totalmente a visibilidade através do vidro. Opção de preta (Blackout) ou branca (White-Out)</p>
//                         </div>
//                     </li>
//                     <li>
//                         <div>
//                             <img src={fume} alt='fume'></img>
//                             <h2>Nanocerâmica</h2>
//                             <p>Película premium, com alta eficiência no bloqueio de calor e UV. A versão mais clara (70%) é ideal para vitrines ou onde se deseja diminuir a incidência de calor do sol, mantendo totalmente a visibilidade.</p>
//                             <h3>Graduações:</h3>
//                             <li>5%</li>
//                             <li>20%</li>
//                             <li>35%</li>
//                             <li>70%</li>
//                         </div>
//                     </li>
//                 </ul>

//             </div>



//         </section>
//     )


// }

// export default Products
// imagens dos produtos:
//fume + graduações:
import fume from '../../img/fume.jpg';

// metalizada + graduações

// segurança

// pelicula jateada

// vinil jateado

// prata espelhada

// silver black

import React, { useState } from 'react';
import styles from './Products.module.css';


function Products() {
    const [openCard, setOpenCard] = useState(null);

    const toggleCard = (index) => {
        setOpenCard(openCard === index ? null : index);
    };

    return (
        <section className={styles.products_container}>
            <div className={styles.products_space}>
                <ul className={styles.products}>

                    {[
                        { name: 'Professional Fumê', description: '', gradations: ['5%', '20%', '35%', '50%'] },
                        { name: 'Metalizada', description: 'Película semi-brilho profissional. Muito eficiente contra o calor proveniente dos raios solares, sem ser totalmente espelhada', gradations: ['5%', '20%', '35%'] },
                        { name: 'Segurança', description: 'Películas mais espessas e resistentes, dão mais resistência ao vidro e impedem que ele se despedace na eventualidade da quebra', gradations: ['5%', '20%', '35%', 'Transparente(Sem bloqueio de UV e IR)'] },
                        { name: 'Película Jateada', description: 'Película branca translúcida, impede a visão sem tirar a luminosidade do ambiente', gradations: [] },
                        { name: 'Vinil Jateado', description: 'Um pouco mais transparente que a Película Jateada, o Vinil Jateado é indicado quando se necessita privacidade sem fechar muito o ambiente', gradations: [] },
                        { name: 'Prata Espelhada', description: 'Película prata em ambos os lados, tem a maior eficiência no bloqueio do calor do sol entre as películas, pois ao mesmo tempo filtra e reflete os raios UV e IR. Disponível na graduação 5%', gradations: ['5%'] },
                        { name: 'Silver Black', description: 'Película extra-escura (graduação 3%), prata no lado externo e fumê no lado interno. Grande capacidade de bloqueio de calor do sol', gradations: [] },
                        { name: 'Espelhada (Colorida)', description: 'Películas espelhadas em cores diversas, com função decorativa', gradations: ['Vermelho Espelhado', 'Verde Espelhado', 'Azul Espelhado', 'Dourada', 'Bronze'] },
                        { name: 'Museu 56D', description: 'Pelicula metalizada clara (56%)', gradations: [] },
                        { name: 'LG-80', description: 'Película clara (80%) com grande índice de bloqueio de UV (99%). Indicada para vitrines, para evitar o desbotamento causado pela incidência de raios solares. Pouco bloqueio de IR (calor).', gradations: [] },
                        { name: 'Opacas', description: 'Películas opacas, utilizadas quando se deseja impedir totalmente a visibilidade através do vidro. Opção de preta (Blackout) ou branca (White-Out)', gradations: [] },
                        { name: 'Nanocerâmica', description: 'Película premium, com alta eficiência no bloqueio de calor e UV. A versão mais clara (70%) é ideal para vitrines ou onde se deseja diminuir a incidência de calor do sol, mantendo totalmente a visibilidade.', gradations: ['5%', '20%', '35%', '70%'] },
                    ].map((product, index) => (
                        <li key={index} className={`${styles.product} ${openCard === index ? styles.open : ''}`}>
                            <div>
                                <img src={fume} alt={product.name} />
                                <h2>{product.name}</h2>
                                <p>{product.description}</p>
                                {/* Verifica se o array gradations tem conteúdo */}
                                {product.gradations.length > 0 && (
                                    <>
                                        <h3 onClick={() => toggleCard(index)}>Graduações:</h3>
                                        <ul>
                                            {product.gradations.map((gradation, i) => (
                                                <li key={i}>{gradation}</li>
                                            ))}
                                        </ul>
                                    </>
                                )}
                                <button className={styles.expand_button} onClick={() => toggleCard(index)}>
                                    +
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

export default Products;


// import React, { useState } from 'react';
// import styles from './Products.module.css';
// import fumeDefault from '../../img/fume.jpg';

// function Products() {
//     const [openCard, setOpenCard] = useState(null);
//     const [selectedGraduation, setSelectedGraduation] = useState({}); // Armazenar a graduação selecionada para cada produto

//     const toggleCard = (index) => {
//         setOpenCard(openCard === index ? null : index);
//     };

//     // Função para obter a imagem com base na graduação do produto
//     const getGraduationImage = (productIndex, graduation) => {
//         const product = products[productIndex];
//         const gradImage = product.gradations.find((grad) => grad.name === graduation)?.image;
//         return gradImage || fumeDefault; // Caso não tenha imagem, retorna uma imagem padrão
//     };

//     // Definir os produtos com graduações e suas imagens associadas
//     const products = [
//         { 
//             name: 'Professional Fumê', 
//             description: '', 
//             gradations: [
//                 { name: '5%', image: '/path/to/fume5.jpg' },
//                 { name: '20%', image: '/path/to/fume20.jpg' },
//                 { name: '50%', image: '/path/to/fume50.jpg' },
//             ]
//         },
//         { 
//             name: 'Metalizada', 
//             description: 'Película semi-brilho profissional. Muito eficiente contra o calor proveniente dos raios solares, sem ser totalmente espelhada', 
//             gradations: [
//                 { name: '5%', image: '/path/to/metalizada5.jpg' },
//                 { name: '20%', image: '/path/to/metalizada20.jpg' },
//                 { name: '35%', image: '/path/to/metalizada35.jpg' },
//             ]
//         },
//         // Outros produtos aqui...
//     ];

//     const handleGraduationClick = (productIndex, graduation) => {
//         setSelectedGraduation((prevState) => ({
//             ...prevState,
//             [productIndex]: graduation
//         }));
//     };

//     return (
//         <section className={styles.products_container}>
//             <div>
//                 <ul className={styles.products}>
//                     {products.map((product, productIndex) => (
//                         <li key={productIndex} className={`${styles.product} ${openCard === productIndex ? styles.open : ''}`}>
//                             <div>
//                                 {/* A imagem aqui depende da graduação selecionada */}
//                                 <img 
//                                     src={selectedGraduation[productIndex] 
//                                         ? getGraduationImage(productIndex, selectedGraduation[productIndex]) 
//                                         : fumeDefault} 
//                                     alt={product.name} 
//                                 />
//                                 <h2>{product.name}</h2>
//                                 <p>{product.description}</p>
                                
//                                 {product.gradations.length > 0 && (
//                                     <>
//                                         <h3 onClick={() => toggleCard(productIndex)}>Graduações:</h3>
//                                         <ul>
//                                             {product.gradations.map((gradation, index) => (
//                                                 <li
//                                                     key={index}
//                                                     onClick={() => handleGraduationClick(productIndex, gradation.name)} // Atualiza a imagem com base na graduação
//                                                     style={{ cursor: 'pointer', color: '#007BFF' }}
//                                                 >
//                                                     {gradation.name}
//                                                 </li>
//                                             ))}
//                                         </ul>
//                                     </>
//                                 )}
//                                 <button className={styles.expand-button} onClick={() => toggleCard(productIndex)}>
//                                     +
//                                 </button>
//                             </div>
//                         </li>
//                     ))}
//                 </ul>
//             </div>
//         </section>
//     );
// }

// export default Products;
