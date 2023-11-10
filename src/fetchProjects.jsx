import { createClient } from 'contentful';
import { useEffect, useState } from 'react';

const client = createClient({
  space: 'z7k29c0asf9b',
  environment: 'master',
  accessToken: 'a5tv-Zk6OGp0-fEMM3D3L0oOxYo6eb0m3NmPsXfV-NE',
});

export const useFetchProjects = () => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  const getData = async () => {
    try {
      const response = await client.getEntries({ content_type: 'projects' });

      const projects = response.items.map((item) => {
        const { title, url, image } = item.fields;
        const img = image?.fields?.file?.url;
        const { id } = item.sys;
        return { title, url, img, id };
      });
      setProjects(projects);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return { loading, projects };
};
// client.getEntries({ content_type: 'projects' }).then((response) => {
//   console.log(response);
// });
