import '../assets/style.css';

function Header() {
    return (
        <header className="website-header box-border flex justify-between items-center bg-gradient-to-r from-[#672280] to-[#A626D3] px-8 py-6">
            <div className="website-logo box-border flex items-center">
                <img src="./images/troll_face.png" alt="logo" className="logo box-border w-8"></img>
                <span className="website-name box-border text-white font-karla font-bold text-2xl ml-2">Meme Generator</span>
            </div>

            <p className="project-title box-border text-white font-karla font-medium hidden sm:block">React Course - Project 3</p>
        </header>
    )
}

export default Header;