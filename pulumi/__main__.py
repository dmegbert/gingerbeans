import pulumi

from static_site import create_static_site

# Create static site
resources = create_static_site()

# Export the name of the bucket
pulumi.export('bucket_name', resources["s3"].id)

# Export the distribution id
pulumi.export('cloudfront_distribution', resources["cf"].id)

# Export the DNS records ids
pulumi.export('a_record', resources["r53_a"].id)
pulumi.export('aaaa_record', resources["r53_aaaa"].id)
