{% if user%}
  localStorage.setItem('professorId', "{{user.id}}");
{% endif %}