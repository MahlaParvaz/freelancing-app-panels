import Loading from '../../ui/Loading';
import toLocalDateShort from '../../utils/toLocalDateShort';
import { toPersianNumbersWithComma } from '../../utils/toPersianNumbersWithComma';
import truncateText from '../../utils/truncateText';
import useOwnerProjects from './useOwnerProjects.';
import Empty from '../../ui/Empty';
import Table from '../../ui/Table';
import ProjectRow from './ProjectRow';
function ProjectTable() {
  const { projects, isLoading } = useOwnerProjects();
  if (isLoading) return <Loading />;

  if (!projects.length) return <Empty resourceName="پروژه" />;

  return (
    <Table>
      <Table.Header>
        <th>#</th>
        <th>عنوان پروژه</th>
        <th>دسته بندی</th>
        <th>بودجه</th>
        <th>ددلاین</th>
        <th>تگ ها</th>
        <th>فریلنسر</th>
        <th>وضعیت</th>
        <th>عملیات</th>
      </Table.Header>
      <Table.Body>
        {projects.map((project, index) => (
          <ProjectRow key={project._id} project={project} index={index} />
        ))}
      </Table.Body>
    </Table>
  );
}

export default ProjectTable;
