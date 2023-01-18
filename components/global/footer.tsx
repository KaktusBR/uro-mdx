import { CMS_DESCRIPTION, CMS_NAME } from "../../data/constants";

import { FooterNavLinks } from "../../data/footerNavLinks";
import Link from "next/link";
import React from "react";
import Container from "../partials/container";
  
export default function Footer(): JSX.Element {


  const footerNav = FooterNavLinks();
  const year = new Date().getFullYear()  

  // const latestPosts = allPosts?.nodes
  return (
    <>
    <footer className="bg-gray-800 text-slate-400 text-sm py-5">
      <Container>
        <div className="grid grid-cols-3 py-5 text-sm">
          <div>
            <p className="pb-5 text-lg font-bold ">{CMS_NAME}</p>
            <p className="pb-5">{CMS_DESCRIPTION}</p>
          </div>
          <div>
      
            {footerNav.map((link) => (
              <Link key={link.title} href={link.href} aria-current="page">
                <a className="text-slate-200 hover:underline active:underline cursor-pointer uppercase block">
                  {link.title}
                </a>
              </Link>
            ))}
          </div>
          <div>
            <h4 className="text-lg font-bold">NAJNOVŠIE ČLÁNKY</h4>
            {/* {latestPosts.length > 0 && <MoreStories posts={latestPosts} />} */}
          </div>
        </div>
      </Container>
    </footer>
    <footer className="bg-black text-slate-400 text-center text-sm py-5">
      <Container>
        <p>&copy; {year}  {CMS_NAME} | made by Clovetek</p>
      </Container>
    </footer>
    </>
  );
}