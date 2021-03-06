# Generated by Django 3.0.8 on 2020-07-14 14:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('community', '0007_group_location'),
        ('forum', '0007_auto_20200709_1832'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='topics',
            field=models.ManyToManyField(blank=True, null=True, related_name='posts', to='community.Topic'),
        ),
    ]
