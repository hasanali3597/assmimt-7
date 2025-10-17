import React from 'react';

const Navbar = () => {
    return (

        <div class="navbar bg-base-100 shadow-sm ">
            <div className='container mx-auto flex'>
                <div class="flex-1">
                    <a class="btn btn-ghost text-xl">CS — Ticket System</a>
                </div>

                <div className="list-none gap-3 items-center flex">
                    <li className="hidden md:block"><a href="">Home</a></li>
                    <li className="hidden md:block"><a href="">FAQ</a></li>
                    <li className="hidden md:block"><a href="">Changelog</a></li>
                    <li className="hidden md:block"><a href="">Blog</a></li>
                    <li className="hidden md:block"><a href="">Download</a></li>
                    <li className="hidden md:block"><a href="">Contact</a></li>

                    <button className="bg-gradient-to-r from-[#632ee3] to-[#9f62f2] py-2 px-4 text-white text-[1rem] font-semibold hover:from-lime-300 hover:to-amber-600 rounded-xl">
                        + New Ticket
                    </button>
                </div>



            </div>
        </div>

    );
};

export default Navbar;