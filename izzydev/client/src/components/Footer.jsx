import React from "react";

export default function Footer() {
  // // nav Content
  // const navigation = [
  //     {name: 'Services', toId: '/#Services'},
  //     {name: 'Why Us?', toId: '/#WhyUs'},
  //     {name: 'About Us', toId: '/#AboutUs'},
  //     {name: 'Partners', toId: '/#Partners'}
  // ];

  return (
    <div className="text-center mt-14">
      {/* Larger Screen Navigation */}
      {/* <ul className='flex flex-wrap space-x-5 justify-center items-center text-blueGray-600  text-lg my-10'>
                    {navigation.map(({name, toId}, i) => (
                        <li key={i}>
                            <NavHashLink
                                smooth 
                                to={toId}
                                className='hover:text-gray-400'
                            >
                                {name}
                            </NavHashLink>
                        </li>
                    ))}
                </ul> */}

      <div>
        <p className="text-sm text-gray-500">
          <a href="https://izzydev.com" target="_blank" rel="noreferrer">
            izzydev.com
          </a>{" "}
          © 2022{" "}
        </p>
      </div>

      <div className="mt-16 pb-10">
        <a
          className="text-xs text-gray-300"
          href="https://icons8.com/"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          Icon Source
        </a>
      </div>
    </div>
  );
}
