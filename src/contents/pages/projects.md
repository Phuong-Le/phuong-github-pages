---
title: Projects
layout: base
permalink: /projects/
eleventyNavigation:
  key: Projects
  order: 2
---

Check out some of my past and current projects

{% for project in collections.projects %}
- [{{ project.data.title }}]({{ project.url | url }})
{% endfor %}
