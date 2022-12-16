import Image from 'next/image';

function SidebarIcon() {
  return (
    <div className="SidebarIcon">
      <Image 
        src="/images/main-pc2.jpg" 
        alt="profile" 
        width={400} 
        height={267}
        className="image"
        />
      <p>test@gmail.com</p>
    </div>
  );
};

export default SidebarIcon;