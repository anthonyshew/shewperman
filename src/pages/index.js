import React, { useRef } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import '../styles/index.scss'
import '../styles/project-card.scss'
import '../styles/tech-card.scss'

import Image from "gatsby-image"
import useAnimateOnVisible from "../hooks/useAnimateOnVisible"
import useMediaQuery from "../hooks/useMediaQuery"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Dogear from "../svg/dogear.svg"

const Index = ({ location }) => {
  const data = useStaticQuery(graphql`
  query IndexQuery {
    companyLogo: file(absolutePath: { regex: "/shew-logo.png/" }) {
      childImageSharp {
        fixed(width: 150, height: 150) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    aamlLogo: file(absolutePath: { regex: "/aaml-logo.png/" }) {
      childImageSharp {
        fixed(width: 150, height: 150) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    mmsiLogo: file(absolutePath: { regex: "/mmsi-logo.png/" }) {
      childImageSharp {
        fixed(width: 150, height: 150) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    flatbillLogo: file(absolutePath: { regex: "/flatbill-logo.png/" }) {
      childImageSharp {
        fixed(width: 150, height: 150) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    me: file(absolutePath: { regex: "/me.png/" }) {
      childImageSharp {
        fixed(width: 394, height: 525) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    javascript: file(absolutePath: { regex: "/javascript.png/" }) {
      childImageSharp {
        fixed(width: 80, height: 80) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    node: file(absolutePath: { regex: "/node.png/" }) {
      childImageSharp {
        fixed(width: 72, height: 80) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    react: file(absolutePath: { regex: "/react.png/" }) {
      childImageSharp {
        fixed(width: 90, height: 80) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    express: file(absolutePath: { regex: "/express.png/" }) {
      childImageSharp {
        fixed(width: 80, height: 80) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    git: file(absolutePath: { regex: "/git.png/" }) {
      childImageSharp {
        fixed(width: 80, height: 80) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    postgreSQL: file(absolutePath: { regex: "/postgreSQL.png/" }) {
      childImageSharp {
        fixed(width: 80, height: 80) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    gatsby: file(absolutePath: { regex: "/gatsby.png/" }) {
      childImageSharp {
        fixed(width: 80, height: 80) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    figma: file(absolutePath: { regex: "/figma.png/" }) {
      childImageSharp {
        fixed(width: 54, height: 80) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, limit: 2) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
  `)

  const posts = data.allMarkdownRemark.edges

  const playerMessage = useRef(null)
  const sponsorMessage = useRef(null)
  useAnimateOnVisible({ element: playerMessage })
  useAnimateOnVisible({ element: sponsorMessage })

  const playerCard = useRef(null)
  const sponsorCard = useRef(null)
  const companyCard = useRef(null)
  useAnimateOnVisible({ element: companyCard })
  useAnimateOnVisible({ element: playerCard })
  useAnimateOnVisible({ element: sponsorCard })

  const sectionMystery = useRef(null)
  const topMask = useRef(null)
  const borderMask = useRef(null)
  const shadowMask = useRef(null)
  const paragraphs = useRef(null)

  const animatePageTurn = () => {
    sectionMystery.current.classList.add("out")
    topMask.current.classList.add("out")
    borderMask.current.classList.add("out")
    shadowMask.current.classList.add("out")
    paragraphs.current.classList.add("out")
    document.getElementsByClassName("dogear")[0].classList.add("out")
  }

  return (
    <Layout location={location}>
      <SEO
        title="Home"
      >
        <meta name="og:image" content="/media/shew-logo.png" />
        <meta name="twitter:image" content="/media/shew-logo.png" />
        <meta name="twitter:image:alt" content="Adopt a Minor Leaguer Home Page" />
      </SEO>

      <section className="section-mystery" ref={sectionMystery}>
        <div className="top-mask" ref={topMask}>
          <div className="p-container" ref={paragraphs}>
            <p className="question-mark">?</p>
            <p className="first-line">My True Identity?</p>
            <p className="second-line">That's a Secret...</p>
            <p className="third-line">(Unless you turn the page...)</p>
          </div>
          <Dogear onClick={() => animatePageTurn()} />
        </div>

        <div className="shadow-container" ref={shadowMask}></div>
        <div className="content-underneath">
          <Image
            className="my-headshot"
            fixed={data.me.childImageSharp.fixed}
            alt="Me!"
          />
          <div className="bio">
            <h1>Anthony Shew</h1>
            <h2>Full Stack Javascript Developer</h2>
            {useMediaQuery("(max-width: 750px)") ? <p>You may know me for my baseball career. But I'm also passionate about creating software that adds value to businesses.</p> : <>
              <p>My name is Anthony and I try to learn everything I can. You may know me as Anthony, the baseball player, or you may have come here looking for Anthony, the developer. Either way, I'm happy you're here to find out about my superpowers. Hate to let you down but I don't have any - but I do like to learn about nearly anything. From learning about my body as an athlete to finding out what Javascript is truly capable of, learning sometimes feels like a superpower in it's own way.</p>
            </>}
          </div>
        </div>
        <div className="border-mask" ref={borderMask}></div>
      </section>

      <section className="section-projects">
        <h2>My Favorite Missions So&nbsp;Far</h2>
        <ProjectCard
          bgColor="#012B5D"
          textColor="#FFFFFF"
          buttonColor="#F39116"
          title="Adopt a Minor Leaguer"
          imgSrc={data.aamlLogo.childImageSharp.fixed}
          imgAlt="Adopt a Minor Leaguer Logo"
          description="ADOPT A MINOR LEAGUER IS A NON-PROFIT DEDICATED TO THE IMPROVEMENT OF THE LIVES OF MINOR LEAGUE BASEBALL PLAYERS."
          type="Site"
          projectLink="https://adoptaminorleaguer.com"
          githubLink="https://github.com/anthonyshew/adoptaplayer"
        />
        <ProjectCard
          bgColor="#3D5C5C"
          textColor="#FFFFFF"
          buttonColor="#FFFFFF"
          title="MMSI"
          imgSrc={data.mmsiLogo.childImageSharp.fixed}
          imgAlt="Mission Mechanical Services Inc. Logo"
          description="MISSION MECHANICAL SERVICES INC. IS ONE OF THE MOST REPUTABLE HVAC COMPANIES IN SOUTHERN CALIFORNIA."
          type="Site"
          projectLink="https://missionmechanicalservices.com"
          githubLink="https://github.com/anthonyshew/mmsi"
        />
        <ProjectCard
          bgColor="#6EC202"
          textColor="#000000"
          buttonColor="#000000"
          title="Flatbill Jersey Customizer"
          imgSrc={data.flatbillLogo.childImageSharp.fixed}
          imgAlt="Flatbill Baseball Logo"
          description="THE FLATBILL JERSEY CUSTOMIZER ALLOWS YOU TO DESIGN YOUR OWN JERSEY AND ORDER IT AS QUICK AND EASY AS POSSIBLE!"
          type="App"
          projectLink="https://customizer.flatbillbaseball.com"
          githubLink="https://github.com/anthonyshew/flatbill-customizer"
        />
      </section>

      <section className="section-tech">
        <h2>Tools in My Belt</h2>
        <div className="flex-container">
          <TechCard
            title={useMediaQuery("(max-width: 350px)") ? "JS" : "Javascript"}
            imgSrc={data.javascript.childImageSharp.fixed}
          />
          <TechCard
            title="Node"
            imgSrc={data.node.childImageSharp.fixed}
          />
          <TechCard
            title="React"
            imgSrc={data.react.childImageSharp.fixed}
          />
          <TechCard
            title="Express"
            imgSrc={data.express.childImageSharp.fixed}
          />
          <TechCard
            title="Git"
            imgSrc={data.git.childImageSharp.fixed}
          />
          <TechCard
            title={useMediaQuery("(max-width: 475px)") ? "Postgres" : "PostgreSQL"}
            imgSrc={data.postgreSQL.childImageSharp.fixed}
          />
          <TechCard
            title="Gatsby"
            imgSrc={data.gatsby.childImageSharp.fixed}
          />
          <TechCard
            title="Figma"
            imgSrc={data.figma.childImageSharp.fixed}
          />
        </div>
        <p className="more">And a few others: JWT, Netlify, Sass, GraphQL, GSAP, react-hook-form, and more...</p>
      </section>

      <section className="section-blog">
        <h2>My Blog</h2>
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <div key={node.fields.slug} className="post">
              <header>
                <h3 className="post-title">
                  <Link to={node.fields.slug}>
                    {title}
                  </Link>
                </h3>
                <small className="post-date">{node.frontmatter.date}</small>
              </header>
              <section>
                <p className="post-excerpt"
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt,
                  }}
                />
              </section>
            </div>
          )
        })}
        <div className="container-link-button">
          <Link to="/blog" className="link-button">
            Visit All Posts
        </Link>
        </div>
      </section>
    </Layout>
  )
}

export default Index

const ProjectCard = ({ bgColor, textColor, buttonColor, title, imgSrc, imgAlt, description, type, projectLink, githubLink }) => (
  <div className="project-card" style={{ backgroundColor: bgColor, color: textColor }}>
    <h3>{title}</h3>
    <div className="flex-container">
      <div className="image-container">
        <Image fixed={imgSrc} alt={imgAlt} />
      </div>
      <div className="other-container">
        <p>{description}</p>
        <div className="linkbuttons-container">
          <a style={{ backgroundColor: buttonColor, color: bgColor }} href={projectLink} target="_blank" rel="noreferrer noopener">{type}</a>
          <a style={{ backgroundColor: buttonColor, color: bgColor }} href={githubLink} target="_blank" rel="noreferrer noopener">Github</a>
        </div>
      </div>

    </div>

  </div>
)

const TechCard = ({ imgSrc, title }) => (
  <span className="tech-card">
    <Image fixed={imgSrc} alt={title} />
    <p>{title}</p>
  </span>
)