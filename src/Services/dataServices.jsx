const serviceWithReadMoreButton = [{
    service: "Sites internet",
    description : "Site d'entreprise, portfolio, blog personnel et pro",
    img: '/img/website.png',
},
{
    service: "Boutique en ligne",
    description : "Avec solution de paiement via mobile money",
    img: '/img/shopping-cart.png',
},
{
    service: "Plateformes web",
    description : "Marketplace, plateforme de E-learning, forums, et bien d'autres",
    img: '/img/plateform.png',
}]

const servicesWithLists = [{
    service: "Sites internet",
    description : (
    <ul>
        <li>Site web d'entreprise</li>
        <li>Site institutionnel</li>
        <li>Portfolio</li>
        <li>Blog personnel</li>
        <li>Blog professionnel</li>
    </ul>
    ),
    img: '/img/website.png',
},
{
    service: "Boutique en ligne",
    description : (
        <ul>
            <li>Wordpress/woocommerce</li>
            <li>Solution de paiement en ligne</li>
            <li>Mobile money</li>
        </ul>
    ),
    img: '/img/shopping-cart.png',
},
{
    service: "Plateformes web",
    description : (
        <ul>
            <li>Marketplace</li>
            <li>Plateforme de E-learning</li>
            <li>Forum et bien d'autres projets</li>
        </ul>
    ),
    img: '/img/plateform.png',
}]

export { serviceWithReadMoreButton, servicesWithLists }