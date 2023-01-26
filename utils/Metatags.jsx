export default function Metatags({title, description, image, canonical}) {
    return (
        <>
            <title>{title}</title>
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:url" content={`https://www.dirtlessdetailing.com${canonical}`} />
            <meta property="type" content="website" />

            <meta name="twitter:title" content={title} />
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:site" content="@dirtless-detailing" />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />

            <link rel="canonical" href={`https://www.dirtlessdetailing.com${canonical}`} />
        </>
    )
}