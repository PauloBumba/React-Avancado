import { useEffect, useState } from "react";
import axios from "axios";
import { Body } from "../../Body/body";
import {ThreeDots} from "react-loader-spinner"
export const Home: React.FC = () => {
  const [articles, setArticles] = useState<any[]>([]); // Inicialize como um array
  const [loading, setLoading] = useState<boolean>(false); // Controle de carregamento

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const url = "https://api.spaceflightnewsapi.net/v4/articles";
        const response = await axios.get(url);
        setArticles(response.data.results || response.data); 
        setLoading(true);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      } 
    };

    fetchApi();
  }, []);

  return (
    <div className="container-fluid text-center">
      {loading?( articles.map((index)=>(
        <Body
        key={index.id}
        id={index.id}
        title={index.title}
        image_url={index.image_url}
        summry={index.summry}
        url={index.summry}
        />
      ))):(
      <div className="d-flex justify-content-center align-content-center vh-100 mt-5">
        <ThreeDots/>
        </div>
    )
      }
    </div>
  );
};
