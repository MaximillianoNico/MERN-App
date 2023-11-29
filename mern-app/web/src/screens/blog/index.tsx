import { Typography, Card, Input } from "antd"
import { SearchOutlined } from '@ant-design/icons';
import Layout from "../../components/layout"
import { useAction } from "./actions";

import "./blog.css";

const Screen = () => {
  const { search ,content, onSearch } = useAction();
  return (
    <Layout>
      <Typography.Title>
        Blog
      </Typography.Title>
      <div className="searchbox">
        <Input onChange={onSearch} placeholder="" prefix={<SearchOutlined />} />
      </div>
      {search && (
        <Typography.Title level={4}>
          {content.length} result for {search}
        </Typography.Title>
      )}
      <div className="blog-content">
        {!!content?.length && content.map(
          ({ content, title }) => (
            <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
              <Card.Meta title={title} description={content} />
            </Card>
          )
        )}
      </div>
    </Layout>
  )
}

export default Screen;