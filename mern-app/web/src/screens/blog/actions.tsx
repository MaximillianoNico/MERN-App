import Axios from "axios";
import debounce from 'lodash.debounce';
import { useEffect, useState } from "react";

export const useAction = () => {
  const [search, setSearch] = useState('');
  const [content, setContent] = useState([]);

  useEffect(() => {
    const GetBlogContent = async (search: string) => {
      try {
        const response = await Axios.get(
          'http://localhost:8080/api/blog',
          {
            params: {
              s: search
            }
          }
        );

        setContent(response.data.data);
      } catch (err) {
        console.log('failed fetch blog: ', err)
      }
    };

    GetBlogContent(search);
  }, [search])

  const onSearch = debounce(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearch(e.target.value);
    },
    900
  )
  
  return {
    search,
    content,
    onSearch
  } 
}
