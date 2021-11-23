import { Box, Heading, Container, Text } from '@chakra-ui/layout'
import type { NextPage } from 'next'
import Head from 'next/head'
import BreadcrumbComponent from '../components/Breadcrumb'
import { getTitle } from '../utils/getTitle'

const About: NextPage = () => {
  return (
    <main>
      <Head>
        <title>{getTitle('Obchodní podmínky')}</title>
      </Head>

      <Container maxW={'6xl'} py={12}>
        <BreadcrumbComponent items={['index', 'about']} />

        <Heading pb={2}>Obchodní podmínky</Heading>

        <Text>

          <p>obchodní společnosti VELKÁ PECKA s.r.o., IČO 03024130, se sídlem Praha 8 – Karlín, Sokolovská 100/94, PSČ 186 00, společnost zapsaná v obchodním rejstříku vedeném Městským soudem v Praze, oddíl C, vložka 226550 (dále jen „Velká Pecka“) pro nákup zboží a/nebo služeb na portálu www.rohlik.cz (dále jen „VOP“)</p>

          <p>Poslední aktualizace: 10.7.2018</p>

          <Heading pb={1}>I. Úvodní ustanovení</Heading>

          <p>Tyto VOP společnosti Velká Pecka upravují vzájemná práva a povinnosti smluvních stran vzniklé v souvislosti nebo na základě smlouvy na využití služeb a/nebo nákup zboží společnosti Velká Pecka (dále jen „Smlouva“) uzavírané mezi společnosti Velká Pecka a kupujícím, který si prostřednictvím portálu www.rohlik.cz (dále jen „Portál Velká Pecka“) a/nebo prostřednictvím jiné internetové adresy a/nebo jiné mobilní aplikace, hodlá zakoupit u společnosti Velká Pecka zboží a/nebo službu (dále jen „Zboží“). Tyto VOP jsou určeny pro nákup Zboží kupujícím za účelem přímé spotřeby (dále jen „Zákazník“).</p>

          <p>V aktuální nabídce Zboží na Portálu Velká Pecka mohou být některá ustanovení upravena odlišně od VOP, přičemž taková odchylná ujednání mají přednost před těmito VOP.</p>

          <p>Pokud Velká Pecka nabízí zákazníkům jakoukoli akci, která má nebo bude mít vlastní podmínky, mají podmínky této akce přednost před VOP, pokud by však jakékoli ujednání z podmínek akce bylo neplatné nebo nevymahatelné, užije se ujednání VOP namísto ujednání z takové akce. Akce může být omezena časově a/nebo množstvím prodaného Zboží, případně může mít i jiné další podmínky a omezení. Velká Pecka je oprávněna takovou akci kdykoli zrušit.</p>

          <p>Ustanovení těchto VOP jsou nedílnou součástí Smlouvy. Smlouva a VOP jsou vyhotoveny v českém jazyce. Smlouvu je možno uzavřít pouze v českém jazyce. Potom, co ji Zákazník s Velkou Peckou uzavře, zůstane uložená u společnosti Velká Pecka a není Zákazníkovi přístupná.</p>

          <p>Společnost Velká Pecka může znění VOP jednostranně měnit či doplňovat. Tímto ustanovením nejsou dotčena práva a povinnosti vzniklá po dobu účinnosti předchozího znění VOP. Společnost Velká Pecka informuje Zákazníky o změně VOP na Portálu Velká Pecka, případně jiným vhodným způsobem tak, aby se s aktuálním zněním VOP Zákazník mohl bez nepřiměřených obtíží seznámit. Má se za to, že Zákazník, který uzavírá Smlouvu, s novým zněním VOP souhlasí.</p>

        </Text>
      </Container>
    </main>
  )
}

export default About
