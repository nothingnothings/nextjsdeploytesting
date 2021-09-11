

import LogoStyle from './Logo.module.css';

import Image from 'next/image';

const Logo = (props) => {









    return(
        <div className={LogoStyle.Logo}>
            {/* <Image src={} height={} width={} alt="App Logo" /> */}
            <h2>Next Blog</h2>
        </div>
    )
}




export default Logo;