import React from 'react';
import avatar from '../images/seagull.jpg';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//componente de clase:
class MediaCard extends React.Component {
  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={avatar} className='App-avatar' alt='avatar' />
          <div className='App-spans'>
            <span>{this.props.name}</span>
            <span>{this.props.date}</span>
          </div>
        </header>
        <p className='App-lorem'>{this.props.text}</p>
        <div className='App-read-more'>
          <a
            className='App-link'
            href='https://reactjs.org'
            target='_blank'
            rel='noopener noreferrer'
          >
            Leer más
          </a>
          <div className='App-likes'>
            <span>{this.props.likes}</span>
            <FontAwesomeIcon icon={faHeart} className='App-heart' />
          </div>
        </div>
      </div>
    );
  }
}

//componente funcional:
// const MediaCard = (props) => {
//   return (
//     <div className='App'>
//       <header className='App-header'>
//         <img src={avatar} className='App-avatar' alt='avatar' />
//         <div className='App-spans'>
//           <span>{this.props.name}</span>
//           <span>{this.props.date}</span>
//         </div>
//       </header>
//       <p className='App-lorem'>{this.props.text}</p>
//       <div className='App-read-more'>
//         <a
//           className='App-link'
//           href='https://reactjs.org'
//           target='_blank'
//           rel='noopener noreferrer'
//         >
//           Leer más
//         </a>
//         <div className='App-likes'>
//           <span>{this.props.likes}</span>
//           <FontAwesomeIcon icon={faHeart} className='App-heart' />
//         </div>
//       </div>
//     </div>
//   );
// };
// export default MediaCard;

export default MediaCard;
