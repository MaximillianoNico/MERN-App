import { useEffect, useMemo, useState } from "react"

export const TABS = {
  LIST: 'list',
  FORM: 'form'
}

const useAction = () => {
  const [tab, setTab] = useState(TABS.LIST)
  const [limit, setLimit] = useState(5);
  const [users, setUsers] = useState([]);

  const onChangeLimit = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLimit(+e.target.value)
  }

  useEffect(() => {
    const GetUsers = async () => {
      try {
        const response = await fetch('http://localhost:8081/api/users');

        if (!response.ok) throw new Error("Something went wrong, please try again")

        const data = await response.json();
        setUsers(data?.data ?? []);

      } catch (err) {
        console.log('ERROR: ', err);
      }
    }

    GetUsers();
  }, [])

  const onTabChange = (tab: string) => setTab(tab);

  const list = useMemo(
    () => {
      if (limit <= 0 || limit > users.length) return users;

      return users.slice(0, limit);
    },
    [limit, users]
  )

  return {
    limit,
    tab,
    users: list,
    onTabChange,
    onChangeLimit
  }
}

export const useForm = () => {
  const [form, setForm] = useState({
    username: "",
    phone: "",
    email: ""
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => setForm(
    prev => ({
      ...prev,
      [e.target.name]: e.target.value
    })
  )

  return {
    form,
    onChange
  }
}

export default useAction;
