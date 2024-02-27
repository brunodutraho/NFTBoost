
import { ContainerGrid } from "./container";
import { TitleSection } from "./title-section";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";


const questions = [
    {
        question: 'O que são NFTs',
        response: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    },
    {
        question: 'Como funciona a compra de NFTs em seu site?',
        response: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    },
    {
        question: 'Como posso vender meus próprios NFTs?',
        response: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    },
    {
        question: 'Os NFTs são seguros e autênticos?',
        response: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    },
    {
        question: 'Quais são as taxas envolvidas na compra e venda de NFTs em seu site?',
        response: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    },
]

export function SectionQuestions() {
    return (
        <section className="pt-10 @desktop:pt-28">
            <ContainerGrid>

                <TitleSection
                    subtitle='Desvendando os Mistérios dos NFTs'
                    title='Perguntas frequentes'
                />
                <div>
                    <Accordion type="single" collapsible className="w-full">
                        {
                            questions.map(({ question, response }, index) => (

                                <AccordionItem key={index} value={`question - ${index}`}>

                                    <AccordionTrigger>{question}</AccordionTrigger>

                                    <AccordionContent>
                                        {response}
                                    </AccordionContent>

                                </AccordionItem>

                            ))
                        }

                    </Accordion>
                </div>
            </ContainerGrid>

        </section>
    )
}