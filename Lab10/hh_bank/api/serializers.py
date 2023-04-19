from rest_framework import serializers
from .models import Company, Vacancy

class CompanySerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField()
    description = serializers.CharField()
    city = serializers.CharField()
    address = serializers.CharField()

    def create(self, validated_data):
        return Company.objects.create(**validated_data)
    
    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.description = validated_data.get('description', instance.description)
        instance.city = validated_data.get('city', instance.city)
        instance.address = validated_data.get('address', instance.city)
        instance.save()
        return instance

'''class VacancySerializer(serializers.ModelSerializer):
    company = CompanySerializer(read_only=True)
    company_id = serializers.IntegerField(write_only=True)
    class Meta:
        model = Vacancy
        fields = ['id', 'desc', 'salary', 'company', 'company_id']

    def validate(self, attrs):
        if 'company_id' in attrs:
            company = Company.objects.filter(id=attrs['company_id']).first()
            if not company:
                raise serializers.ValidationError("Company does not exist")'''
            
class VacancySerializer(serializers.ModelSerializer):
    #company = CompanySerializer(read_only=True)
    #company_id = serializers.IntegerField(write_only=True)
    class Meta:
        model = Vacancy
        fields = ['name', 'description', 'salary', 'company', 'company_id']

    '''def validate(self, attrs):
        if 'company_id' in attrs:
            company = Company.objects.filter(id=attrs['company_id']).first()
            if not company:
                raise serializers.ValidationError("Company does not exist")'''