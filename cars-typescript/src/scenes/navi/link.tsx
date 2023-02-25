import AnchorLink from "react-anchor-link-smooth-scroll"

type Props = {
    page: string;
}

const link = ({page,}: Props) => {
    const lowerCasePage = page.toLowerCase().replace(/ /g, "")
  return (
  <AnchorLink
    className={`${selectedPage === lowerCasePage ? "text-rosePine-highlightMed":""}`}
    href={`#${lowerCasePage}`}
    onClick={}
  >
    {page}
  </AnchorLink>
  )
}

export default link