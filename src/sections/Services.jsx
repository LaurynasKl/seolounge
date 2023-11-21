import { FaHtml5, FaCss3Alt, FaReact } from 'react-icons/fa';
import { FaGitAlt } from 'react-icons/fa6';
import { TbBrandJavascript } from 'react-icons/tb';
import { CgSmartHomeRefrigerator } from 'react-icons/cg';
import { ServiceBlock } from '../components/ServiceBlock';

export function Services({ limit, sortBy }){
  const servicesData = [
      {
        id: 1,
        title: 'HTML',
        description: `Paragraph of text beneath the heading to explain the heading. 
        We'll add onto it with another sentence and probably just keep going until we run out of words.`,
        link: '/services/HTML',
        price: 10.00,
        icon: <FaHtml5 />,
      },
      {
        id: 2,
        title: 'CSS',
        description: `Paragraph of text beneath the heading to explain the heading. 
        We'll add onto it with another sentence and probably just keep going until we run out of words.`,
        link: '/services/CSS',
        price: 100.00,
        icon: <FaCss3Alt />,
      },
      {
        id: 3,
        title: 'JavaScript',
        description: `Paragraph of text beneath the heading to explain the heading. 
        We'll add onto it with another sentence and probably just keep going until we run out of words.`,
        link: '/services/JavaScript',
        price: 50.00,
        icon: <TbBrandJavascript />,
      },
      {
        id: 4,
        title: 'Git',
        description: `Paragraph of text beneath the heading to explain the heading. 
        We'll add onto it with another sentence and probably just keep going until we run out of words.`,
        link: '/services/Git',
        price: 20.00,
        icon: <FaGitAlt />,
      },
      {
        id: 5,
        title: 'React-js',
        description: `Paragraph of text beneath the heading to explain the heading. 
        We'll add onto it with another sentence and probably just keep going until we run out of words.`,
        link: '/services/React-js',
        price: 15.00,
        icon: <FaReact />,
      },
      {
        id: 6,
        title: 'Saldytuvas',
        description: `Paragraph of text beneath the heading to explain the heading. 
        We'll add onto it with another sentence and probably just keep going until we run out of words.`,
        link: '/services/Saldytuvas',
        price: 0.00,
        icon: <CgSmartHomeRefrigerator />,
      },
  ];

  const trueLimit = servicesData.length > limit ? limit : servicesData.length;
  
  const sortByTitleAZ = (a, b) => a.title < b.title ? -1 : a.title < b.title ? 0 : 1;
  const sortByTitleZA = (a, b) => a.title < b.title ? 1 : a.title < b.title ? 0 : -1;
  const sortByPriceZA = (a, b) => a.price - b.price;
  const sortByPriceAZ = (a, b) => b.price - a.price;

  const sortingAlgos = {
    titleAZ: sortByTitleAZ,
    titleZA: sortByTitleZA,
    price09: sortByPriceAZ,
    price90: sortByPriceZA,
  }

    return(
        <div className="container px-4 py-5" id="featured-3">
          <h2 className="pb-2 border-bottom">Services we provide</h2>
          <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
        {
          servicesData
              .sort(sortingAlgos[sortBy])
              .slice(0, trueLimit)
              .map(service => <ServiceBlock key={service.id} data={service} />
            )
          }
        </div>
      </div>
    );
}