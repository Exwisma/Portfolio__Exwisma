import './my-projects.css'
import CrossImg from '/assets/project-images/Cross.png';

const projectInfo = [
  { name: "Кроссовки",
    description: 'Просто кроссовки которые меняют цвет фона практика',
    "link to the project": "https://exwisma.github.io/Cross-shop/",
    "photo for the project": CrossImg,
   },
    { name: "Банан",
    description: 'просто банан',
    "link to the project": "https://images.thevoicemag.ru/upload/img_cache/421/421e0e2565ec015615221f15d566ae8d_ce_2198x1465x0x0.jpg",
    "photo for the project": "https://images.thevoicemag.ru/upload/img_cache/421/421e0e2565ec015615221f15d566ae8d_ce_2198x1465x0x0.jpg",
   },
    { name: "Груша",
    description: 'просто груша',
    "link to the project": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdbecI7ocYGhMZ-tvBEXysRfw0We-v3UxolA&s",
    "photo for the project": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdbecI7ocYGhMZ-tvBEXysRfw0We-v3UxolA&s",
   },
  //   { name: "Банан",
  //   description: 'хороший банан',
  //   "link to the project": "https://exwisma.github.io/Cross-shop/",
  //   "photo for the project": "https://images.thevoicemag.ru/upload/img_cache/421/421e0e2565ec015615221f15d566ae8d_ce_2198x1465x0x0.jpg",
  //  },
  //   { name: "Банан",
  //   description: 'хороший банан',
  //   "link to the project": "https://exwisma.github.io/Cross-shop/",
  //   "photo for the project": "https://images.thevoicemag.ru/upload/img_cache/421/421e0e2565ec015615221f15d566ae8d_ce_2198x1465x0x0.jpg",
  //  },
  //   { name: "Банан",
  //   description: 'хороший банан',
  //   "link to the project": "https://exwisma.github.io/Cross-shop/",
  //   "photo for the project": "https://images.thevoicemag.ru/upload/img_cache/421/421e0e2565ec015615221f15d566ae8d_ce_2198x1465x0x0.jpg",
  //  },
   
]


function ProjectItems() {
  return (
      <div className="portfolio-container">
          {projectInfo.map((element, index) => {
            return (
               <div className="portfolio-box" key={index}>
                 <img src={element['photo for the project']} alt="" />
                  <div className="portfolio-layer">
                  <h4>{element.name}</h4>
                   <p>{element.description}</p>
                  <a target="_blank" rel="noopener noreferrer" href={element['link to the project']}>
                  <i className="bx bx-link-external"></i>
                  </a>
               </div>
        </div>
            )
          })} 
      </div>
  )
};

export default ProjectItems;