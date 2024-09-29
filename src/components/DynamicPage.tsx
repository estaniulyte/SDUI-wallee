import React, { useEffect, useState } from 'react';
import { Component } from 'types/BaseComponent';
import { Schema } from 'types/schema';
import { renderComponent } from 'utils/componentRenderer';


type DynamicPageProps = {
  url: string;
};

const DynamicPage: React.FC<DynamicPageProps> = ({ url }) => {
  const [schema, setSchema] = useState<Component[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchSchema = async (url: string) => {
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error('Failed to fetch schema');
      const data: Schema = await response.json();

      if (!data.components) throw new Error('Invalid schema: "components" key is missing');

      setSchema(data.components);

      if (data.title) {
        document.title = data.title;
      }

    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unknown error occurred');
      }
    }
  };

  useEffect(() => {
    fetchSchema(url);
  }, [url]);

  if (error) return <div>Error: {error}</div>;
  if (!schema) return <div>Loading...</div>;

  return (
    <div>
      {schema.map((component, index) => (
        <div key={index}>
          {renderComponent(component)}
        </div>
      ))}
    </div>
  );
};

export default DynamicPage;
