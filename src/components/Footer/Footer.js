import React from 'react'
import "./Footer.css"
import Button from "@mui/material/Button";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
const Footer = () => {
  return (

    <footer>
      <div className="footer-items">
        <a target="_blank" href='https://www.facebook.com/techfestsliet/'>
          <Button variant="rounded"><FacebookIcon style={{ color: "white" }}/></Button>
        </a>
        <a target="_blank" href='https://www.instagram.com/techfestsliet_/'>
          <Button variant="rounded"><InstagramIcon style={{ color: "white" }}/></Button>
        </a>
        <a target="_blank" href='https://twitter.com/techfestsliet'>
          <Button variant="rounded"><TwitterIcon style={{ color: "white" }}/></Button>
        </a>
        <a target="_blank" href='https://www.linkedin.com/company/techfest-sliet/'>
          <Button variant="rounded"><LinkedInIcon style={{ color: "white" }}/></Button>
        </a>
        <a target="_blank" href='https://www.youtube.com/channel/UCTSrKfF90hZq7reWgd2oyZg'>
          <Button variant="rounded"><YouTubeIcon style={{ color: "white" }}/></Button>
        </a>
      </div>
    </footer>

  )
}

export default Footer