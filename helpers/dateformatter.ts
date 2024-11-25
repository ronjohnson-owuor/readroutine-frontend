 const date_joined = (iso_date:string) =>{
    const isoDate = new Date(iso_date);
    const formattedDate = isoDate.toLocaleString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });
    return formattedDate;
  }

  export default date_joined;