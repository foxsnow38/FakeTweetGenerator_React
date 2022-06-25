
import { queries } from '@testing-library/react';
import { useState } from 'react';
import './App.scss';
import{ReplyIcon , RetweetIcon, LikeIcon, ShareIcon, VerifiedIcon} from "./icons"

function App() {
  const [name,setName] = useState()
  const [username,setUsername] = useState()
  const [isVerified,setIsVerified] = useState(false)
  const [tweet,setTweet] = useState(`merhaba @yagizonal #hello`)
  const [avatar,setAvatar] = useState()
  const [retweets,setRetweets] = useState(0)
  const [quoteTweets,setQuoteTweets] = useState(0)  
  const [likes,setLikes] = useState(0)

  
  const regTweet = new RegExp("/@([\]+)/")
  const tweetFormat = (ttweet) =>
  {  ttweet = tweet


    return ttweet ;
  }
  return (
  <>
  <div className="tweet-settings">
    <h3>Tweet Ayarları</h3>
<ul>
  <li>
    <input type="text" placeholder='Ad Soyad' className='input' value={name} onChange={(e) => setName(e.target.value)} />
  </li>
  <li>
    <input type="text" placeholder='Kullanici Adi' className='input' value={username} onChange={(e) => setUsername(e.target.value)} />
  </li>
  <li>
    <textarea placeholder={`Tweetinizi Girin`} value={tweet} onChange={e => setTweet(e.target.value)}  maxLength="290" className='textarea' cols="30" rows="10"></textarea>
  </li>
  <li>
  <p> Rettweet</p>
    <input type="number"  className='input' value={retweets} onChange={(e) => setRetweets(e.target.value)} />
  </li>
  <li>
  <p> Quotes</p>
    <input type="number" className='input' value={quoteTweets} onChange={(e) => setQuoteTweets(e.target.value)} />
  </li>
  <li>
    <p> Likes</p>
    <input type="number"  className='input' value={likes} onChange={(e) => setLikes(e.target.value)} />
  </li>
</ul>
  </div>
  <div className="tweet-main">
  <div className="tweet">
    <div className="tweet-author" >

<img src={avatar || `https://pbs.twimg.com/profile_images/1443806719365328900/cdR-1GqF_400x400.jpg`} alt="pp" />

<div>
<div className="name">{name || `Isminizi Girin`} <span> {isVerified && <VerifiedIcon height="19px" width="19px"/>} </span> </div>

<div className="nickname">{username || `Kullanici Adinizi Girin`}</div>
</div>

</div>
<div className="tweet-content">
  <p > {tweet}  </p>
</div>
<div className="tweet-stats">
 
<span><b>{retweets}</b> Retweet</span>
<span><b>{quoteTweets}</b> Alinti Tweetler</span>
<span><b>{likes}</b> Begeni</span>
</div>
<div className="tweet-actions">
  <span><ReplyIcon/> </span>
  <span><RetweetIcon/></span>
  <span><LikeIcon/></span>
  <span><ShareIcon/></span>
</div>
  </div>
  
  </div>
  </ >
  );
}

export default App;
