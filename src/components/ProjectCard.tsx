import { Col } from 'react-bootstrap';

interface IProjectCard {
  title: string;
  description: string;
  imgUrl: any;
}

const ProjectCard = ({ title, description, imgUrl }: IProjectCard) => {
  return (
    <Col sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt="" />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
};

export default ProjectCard;
