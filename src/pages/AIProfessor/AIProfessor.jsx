// import Head from "next/head";
import { useState } from "react";
import styles from "./AIProfessor.module.css";
import { Configuration, OpenAIApi } from "openai"
import { apiKey } from "../../main";



export default function AIProfessor() {

  const configuration = new Configuration({
    apiKey: apiKey,
  });

  const openai = new OpenAIApi(configuration);

  // const model = "text-davinci-003";
  // const apiUrl = "https://api.openai.com/v1/engines/" + model + "/completions";
  
  const model = "gpt-3.5-turbo"
  const apiUrl = "https://api.openai.com/v1/chat/completions"
  
  const [questionInput, setQuestionInput] = useState("");
  const [generatedTexto, setGeneratedText] = useState();
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  let generatedText = ''

  async function onSubmit(event) {
    event.preventDefault();
    setIsLoading(true);
    try { 
      setGeneratedText("")
      const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{role: "user", content: `Si la siguiente oración no pide explicación sobre algo referido a tecnología, informática o computación no la respondas. Explicame como si tuviese 12 años, de manera didáctica e infantil, acerca de ${questionInput} solo si esto refiere a algo tecnológico. Al final de tu respuesta, preguntame si puedes ayudarme en algo más, y si entendí el tema. Invitame a ver más cursos en la página. Dime que me esperas y saludame.`}],
      max_tokens: 1200
    });
    // console.log(completion.data.choices[0].message);
    generatedText = completion.data.choices[0].message;
    // setGeneratedText(completion.data.choices[0].message);
    // console.log(generatedText.content)
    setGeneratedText(generatedText.content)
  } catch (error) {
    setError(error)
  } finally { 
    setIsLoading(false)
  }
    
    //   const response = await fetch(apiUrl, {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //       "Authorization": "Bearer " + apiKey,
    //     },
    //     body: JSON.stringify({ 
    //     prompt: `Explicame como si tuviese 12 acerca de ${questionInput}`,
    //     max_tokens: 300,
    //     stop: null,
    //     n: 1,
    //     temperature: 0.7,
    //   }),
    // })
    // .then(response => response.json())
    // .then(data => {
    //   generatedText = data;
    //   setGeneratedText(generatedText.choices[0].text);
    //   // Display the generated text on your website
    //   console.log(generatedText.choices[0].text);
    // })
    // .catch(error => {
    //   console.error(error);
    // })
//aca termina codigo da vinci





  //       }),
  //     });
  //     console.log(response);
  //     const data = await response.json();
  //     if (response.status !== 200) {
  //       throw data.error || new Error(`Falló el request con status ${response.status}`);
  //     }

  //     setResult(data.result);
  //     setQuestionInput("");
  //   } catch(error) {
  //     // Consider implementing your own error handling logic here
  //     console.error(error);
  //     alert(error.message);
  //   }
  // }
  }
  return (
    <div>
      {/* <Head> */}
        {/* <title>Profesor Ultra Inteligente</title>
        <link rel="icon" href="../../../img/course 01.png" /> */}
      {/* </Head> */}

      <main className={styles.main}>
        <img src="../../../img/course 01.png" className={styles.icon} />
        <h3>¿Sobre qué tema quieres consultarme?</h3>
        <form onSubmit={onSubmit}>
          <input className={styles.principal}
            type="text"
            name="question"
            placeholder="Ingresa un tema"
            value={questionInput}
            onChange={(e) => setQuestionInput(e.target.value)}
          />
          <input type="submit" value="Generar explicación" className={styles.generar} />
        </form>
        {isLoading ? <h3>¡El profe virtual está generando tu respuesta!</h3> : <h3 className={styles.result}>{generatedTexto}</h3>}
      </main>
    </div>
  );
      }
