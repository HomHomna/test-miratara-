import { useState, useEffect } from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "@/components/layout/Layout";
import { useRouter } from "next/router";
import DetailScreen from '@/features/explore/screen/detail'

export default function Detail(props: any) {
  const { query } = useRouter()
  const [focusField, setFocusField] = useState<boolean>(false)

  useEffect(() => {
    const handleOutsideClick = (e: any) => {

      if (focusField && !e.target.closest('#number_stays')) {
        setFocusField(false);
      }
    }
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    }
  }, [focusField])

  return (
    <Layout menu={props.menu} setMenu={props.setMenu}>
      <DetailScreen
        focusField={focusField}
        setFocusField={setFocusField}
        id={query?.['hotel-id']}
      />
    </Layout>
  );
}
