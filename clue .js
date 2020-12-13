# Default Virtual Host configuration.

# Let Apache know we're behind a SSL reverse proxy
SetEnvIf X-Forwarded-Proto https HTTPS=on

<VirtualHost _default_:8080>
  DocumentRoot "/opt/bitnami/apache/htdocs"
  <Directory "/opt/bitnami/apache/htdocs">
    Options Indexes FollowSymLinks
    AllowOverride All
    Require all granted
  </Directory>

  # Error Documents
  ErrorDocument 503 /503.html

  <Location /server-status>
    SetHandler server-status
  </Location>
</VirtualHost>

Include "/opt/bitnami/apache/conf/bitnami/bitnami-ssl.conf"

hdgsavgchdvcghvsdghc
sdcvgshvcgs
jdsbhcvsdgcsd
dbvchsdfvhdfbvdj
dvjbhdhfvjdh